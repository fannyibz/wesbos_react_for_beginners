import React from "react";

class AddFishForm extends React.Component {
  render() {
    return (
      <form className="fish-edit">
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="text" placeholder="Price" />
        <select name="status" id="">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" placeholder="Desc"></textarea>
        <input type="image" type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
