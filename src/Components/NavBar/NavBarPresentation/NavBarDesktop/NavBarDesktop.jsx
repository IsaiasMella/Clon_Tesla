import { Logo } from "../../../Images/Logo";

export const NavBarDesktop = ({setPortalOriginalTesla}) => {
  return (
    <main
      id="nav-bar"
      className="py-4 px-12 flex items-center fixed top-0 w-full justify-between z-40"
    >
      <div className="flex flex-grow basis-0">
        <Logo />
      </div>

      <div
        id="box"
        className={`
        absolute bg-black/5 z-10
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

      <nav id="navigator">
        <ul className="flex text-sm justify-center whitespace-nowrap z-[100] [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-1 transition-colors duration-200">
          <li>
            <a href="#Model_S">Model S</a>
          </li>
          <li>
            <a href="#Model_3">Model 3</a>
          </li>
          <li>
            <a href="#Model_X">Model X</a>
          </li>
          <li>
            <a href="#Model_Y">Model Y</a>
          </li>
          <li>
            <a href="#Powerwall">Powerwall</a>
          </li>
          <li>
            <a href="#Carga">Carga</a>
          </li>
        </ul>
      </nav>
      <nav id="navigator" className="flex flex-grow basis-0 justify-end">
        <ul className="flex text-sm justify-center whitespace-nowrap [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-1">
          <li>
            <a onClick={setPortalOriginalTesla} href="#">
              Tienda
            </a>
          </li>
          <li>
            <a onClick={setPortalOriginalTesla} href="#">
              Cuenta
            </a>
          </li>
          <li>
            <a onClick={setPortalOriginalTesla} href="#">
              Menú
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};
