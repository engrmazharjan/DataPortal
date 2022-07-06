import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const GetPitches = async () => {
  /**
   * input: null
   * output: Pitches Array
   * description: fetches All Pitches
   */

  try {
    const pitchesCollection = collection(db, "pitches");

    const leadsSnapshot = await getDocs(pitchesCollection);

    let Pitches = [];
    leadsSnapshot.forEach((pitch) =>
      Pitches.push({ id: pitch.id, ...pitch.data() })
    );
    console.log("Pitches", Pitches);

    return Pitches;
  } catch (error) {
    console.log(error);
  }
};

export default GetPitches;
