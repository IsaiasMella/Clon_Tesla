import { Cross } from "../../../../Icons/Cross/Cross"

export const MenuMobilePresentation = ({controlPortalMenu, handleClick, controlPortalTesla}) => {
  return (
    <>
    <div
        id="boxMobile"
        className={`
        absolute bg-black/5 z-[150]
        rounded-md 
        top-0 left-0
        w-[var(--width)] h-[var(--higth)]
        translate-y-[var(--crossAxis)]
        translate-x-[var(--mainAxis)]
        transition-all duration-[400ms]
        ease-in-out opacity-0
        pointer-events-none
        `}
      />

      <div className="absolute top-0 left-0 bg-white w-full h-full z-[100] flex justify-center flex-col pb-8">
        <div className="w-full flex justify-end px-8 py-2">
          <div onClick={controlPortalMenu} className="cursor-pointer">
            <Cross color="slate-700" />
          </div>
        </div>
        <nav
          id="navigatorMobile"
          className="flex flex-col px-8 w-full justify-center text-slate-700"
        >
          <ul className="mb-20 [&>li]:p-2 [&>li]:cursor-pointer [&>li>a]:text-lg [&>li>a]:font-medium flex flex-col gap-2">
            <li onClick={() => handleClick("#Model_S")}>
              <a href="#Model_S">Model S</a>
            </li>
            <li onClick={() => handleClick("#Model_3")}>
              <a href="#Model_3">Model 3</a>
            </li>
            <li onClick={() => handleClick("#Model_X")}>
              <a href="#Model_X">Model X</a>
            </li>
            <li onClick={() => handleClick("#Model_Y")}>
              <a href="#Model_Y">Model Y</a>
            </li>
            <li onClick={() => handleClick("#Powerwall")}>
              <a href="#Powerwall">Powerwall</a>
            </li>
            <li onClick={() => handleClick("#Carga")}>
              <a href="#Carga">Carga</a>
            </li>
          </ul>

          <ul className="[&>li]:px-2 [&>li]:py-1 [&>li]:cursor-pointer [&>li>a]:text-lg [&>li>a]:font-medium flex flex-col">
            <li onClick={controlPortalTesla}>
              <a href="#">Tienda</a>
            </li>
            <li onClick={controlPortalTesla}>
              <a href="#">Cuenta</a>
            </li>
            <li onClick={controlPortalTesla}>
              <a href="#">Menú</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
