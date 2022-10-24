import scss from "./plannerTableHead.module.scss";

const PlannerTableHead = () => {
  return (
    <div className={scss.root}>
      <p>Название</p>
      <p>Начало</p>
      <p>Окончание</p>
      <p>Ресурсы</p>
    </div>
  );
};

export default PlannerTableHead;
