export const MainHomeLayout = ({ children, title, subtitle, setColor,textColor }) => {
  return (
    <section className="h-full w-full relative">
      <header id="nav-bar" className="h-screen w-full flex flex-col items-center justify-between">
        <div
          id="section-home"
          data-nav-color={setColor}
          className="pt-[5.5rem] text-center z-30"
        >
          <h1 className={textColor}>{title}</h1>
          <p className={textColor + ' text-sm'}>{subtitle}</p>
        </div>
        {children}
      </header>
    </section>
  );
};
