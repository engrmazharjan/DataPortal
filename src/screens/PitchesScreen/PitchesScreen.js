import "./PitchesScreen.css";
import React, { Fragment, useEffect, useState } from "react";
import PitchesComponent from "../../components/PitchesComponent/PitchesComponent";
import GetPitches from "../../controllers/GetPitches";

const PitchesScreen = () => {
  const [PitchesData, setPitchesData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const pitchesData = await GetPitches();
      setPitchesData(pitchesData);
      console.log("PitchesData", PitchesData);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="pitches-container">
        <div className="list-container">
          {PitchesData.map((pitch) => {
            return (
              <PitchesComponent
                company={pitch?.company}
                concernPerson={pitch?.concernPerson}
                mobile={pitch?.mobile}
                address={pitch?.address}
                interest={pitch?.interest}
                clientRemarks={pitch?.clientRemarks}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default PitchesScreen;
