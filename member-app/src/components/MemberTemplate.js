import React from 'react';
import './MemberTemplate.scss';

const MemberTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">회원 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default MemberTemplate;
