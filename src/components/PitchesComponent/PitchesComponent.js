import "./PitchesComponent.css";
import React, { Fragment } from "react";

const PitchesComponent = ({
  company,
  concernPerson,
  mobile,
  address,
  clientRemarks,
  interest,
}) => {
  return (
    <Fragment>
      <div className="list-elements">
        <p>
          <strong>Company:</strong> {company}
        </p>
        <p>
          <strong>Concern Person:</strong> {concernPerson}
        </p>
        <p>
          <strong>Mobile:</strong> {mobile}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Client's Remarks:</strong> {clientRemarks}
        </p>
        <div className="radio-btn-container">
          <p>
            <input type="radio" name="interest" value="Interested" />
            <span>Interested</span>
          </p>

          <p>
            <input type="radio" name="interest" value="Not Interested" />
            <span>Not Interested</span>
          </p>

          <p>
            <input type="radio" name="interest" value="Decide Later" />
            <span>Decide Later</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default PitchesComponent;
