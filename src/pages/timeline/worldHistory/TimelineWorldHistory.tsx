import { MenuItem, Select } from "@mui/material";
import { useFormik } from "formik";
import TimelineWorldHistoryGraph from "./graph/TimelineWorldHistoryGraph";
import {
  SortingType,
  sortingTypes,
} from "./graph/TimelineWorldHistoryGraphTypes";

const TimelineWorldHistory = () => {
  const { values, handleChange } = useFormik({
    initialValues: { sorting: "time" as SortingType },
    onSubmit: (v) => {
      console.log("values", v);
    },
  });

  return (
    <section>
      <h2>World History Timeline</h2>
      <Select value={values.sorting} onChange={handleChange} name="sorting">
        {sortingTypes.map((type) => (
          <MenuItem value={type} key={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <TimelineWorldHistoryGraph sorting={values.sorting} />
    </section>
  );
};

export default TimelineWorldHistory;
