import React from 'react';

function EditButton() {

    return (
        <a className="edit-button">
	<span className="edit-button-icon"><svg width="26" height="26" viewBox="2 2 16 16" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                                     d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z"
                                                                                     clipRule="evenodd"/>
<path fillRule="evenodd"
      d="M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z"
      clipRule="evenodd"/>
</svg></span>
            <span className="edit-button-text">Modifier</span>
        </a>
    )

}
export default EditButton;