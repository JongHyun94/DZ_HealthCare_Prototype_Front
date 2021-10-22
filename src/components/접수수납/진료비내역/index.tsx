import fakeImg from "./진료비내역.png"
function MedicalExpense() {
  return (
    <>
      <div>
        <img src={fakeImg} alt={"진료비 내역"} width={300} height={825}/>
      </div>
    </>
  );
};
export default MedicalExpense;