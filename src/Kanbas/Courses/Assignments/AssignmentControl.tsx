import React from 'react';
import { CiSearch } from "react-icons/ci";

export default function AssignmentControl() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      {/* 搜索框容器 */}
      <div style={{ position: 'relative', flexGrow: 1 }}>
        <CiSearch style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',  // 确保图标垂直居中
          fontSize: '20px',
          color: '#aaa',
          pointerEvents: 'none',  // 防止图标干扰输入框的点击事件
        }} />

        <input
          type="search"
          id="wd-search-assignment"
          placeholder="Search for Assignments"
          style={{
            padding: '10px 10px 10px 40px',  // 为左侧图标留出空间
            width: '300px',
            height: '40px',  // 设置高度
            boxSizing: 'border-box',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* 按钮 */}
      <button id="wd-add-assignment-group" style={{ marginLeft: '10px', padding: '5px 10px' }}>
        + Group
      </button>
      <button className='bg-danger' id="wd-add-assignment" style={{ marginLeft: '10px', padding: '5px 10px' }}>
        + Assignment
      </button>
    </div>
  );
}
