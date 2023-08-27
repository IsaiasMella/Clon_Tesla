import { Cross } from "../../../Icons";
import { ButtonTesla } from "../../Buttons";

export const SendToTesla = ({ controlPortal }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-10/12 md:max-w-md relative flex flex-col justify-center items-center">
        <div
          className="cursor-pointer absolute z-[110] top-[-35px] md:top-[-40px] right-[-10px] md:right-[-15px]"
          onClick={controlPortal}
        >
          <Cross />
        </div>
        <div className="bg-[#f3f3f3] rounded-md p-10 flex flex-col justify-center items-center gap-6">
          <p className="text-center max-w-xs">
            De momento, solamente se realizó la landing, ya que, al parecer,
            <b>Tesla</b> se encuentra en fase de prueba en su página, lo que genera
            varios cambios constantemente.
          </p>
          {/* <p className="text-center max-w-xs">
            Esta opción solo está disponible en la página oficial de{" "}
            <b>Tesla</b>.
          </p> */ }

          <ButtonTesla
            target="_blank"
            to="https://www.tesla.com/es_es"
            text="Tesla oficial"
          />
        </div>
      </div>
    </div>
  );
};
