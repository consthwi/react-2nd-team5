import React from "react";
import { Form } from "react-bootstrap";

const SelectMenu = ({ selectValue, handleSelectChange }) => {
  return (
    <Form.Group>
      <Form.Select value={selectValue} onChange={handleSelectChange}>
        <option value="">종류</option>
        <option value="반찬">반찬</option>
        <option value="국&찌개">국&찌개</option>
        <option value="후식">후식</option>
        <option value="일품">일품</option>
        <option value="밥">밥</option>
        <option value="기타">기타</option>
      </Form.Select>
    </Form.Group>
  );
};

export default SelectMenu;
