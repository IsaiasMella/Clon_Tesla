import { Cross } from "../../../Icons";
import { ButtonTesla } from "../../Buttons";

export const SendToTesla = ({ controlPortal }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" relative flex flex-col justify-center items-center">
        <div
          className="cursor-pointer absolute z-[110] top-[-40px] right-[-35px]"
          onClick={controlPortal}
        >
          <Cross />
        </div>
        <div className="bg-[#f3f3f3] rounded-md p-10 flex flex-col justify-center items-center gap-6">
          <p className="text-center max-w-xs">
            Esta opción solo está disponible en la página oficial de{" "}
            <b>Tesla</b>.
          </p>

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
