import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  name: string;
  editing?: boolean;
  lessons?: Lesson[];
}

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState<string>("");
  const dispatch = useDispatch();
  const { modules } = useSelector((state: any) => state.modulesReducer);

  useEffect(() => {
    const fetchModules = async () => {
      if (!cid) return;
      const modulesData = await coursesClient.findModulesForCourse(cid);
      dispatch(setModules(modulesData));
    };
    fetchModules();
  }, [cid, dispatch]);

  const createModuleForCourse = async () => {
    if (!cid || !moduleName.trim()) return;
    const newModule = { name: moduleName, course: cid };
    const createdModule = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(createdModule));
    setModuleName("");
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: Module) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule({ ...module, editing: false }));
  };

  const handleModuleEdit = (module: Module, newName: string) => {
    dispatch(updateModule({ ...module, name: newName }));
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: Module) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing ? (
                module.name
              ) : (
                <input
                  className="form-control w-50 d-inline-block"
                  defaultValue={module.name}
                  onChange={(e) => handleModuleEdit(module, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule(module);
                    }
                  }}
                />
              )}
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={() => removeModule(module._id)}
                editModule={() => dispatch(editModule(module._id))}
              />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: Lesson) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name} <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
