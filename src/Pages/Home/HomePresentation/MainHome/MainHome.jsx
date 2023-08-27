import { Button } from "../../../../Components/Buttons";
import { ImageLayout, MainHomeLayout } from "../../../../Components/Layouts";
import { Footer } from "../../../../Components/Layouts/Footer/Footer";

export const MainHome = () => {
  return (
    <>
      <div id="Model_Y" className="snap-start snap-mandatory">
        <MainHomeLayout
          title="Model Y"
          subtitle="Concertar una prueba de conducción"
          setColor="#000"
        >
          <div className=" flex flex-col z-40 pb-[48px] md:pb-[70px] gap-y-8 md:flex-row md:gap-x-6 mb-10 md:mb-0">
            <Button type="darkFill" title="Explorar inventario" />
            <Button type="lightFill" title="Pedido personalizado" />
          </div>
          <ImageLayout url="/model-y.webp" />
        </MainHomeLayout>
      </div>

      <div id="Model_3" className="snap-start snap-mandatory">
        <MainHomeLayout
          title="Model 3"
          subtitle="Concertar una prueba de conducción"
          setColor="#000"
        >
          <div className=" flex flex-col z-40 pb-[48px] md:pb-[70px] gap-y-8 md:flex-row md:gap-x-6 mb-10 md:mb-0">
            <Button type="darkFill" title="Explorar inventario" />
            <Button type="lightFill" title="Pedido personalizado" />
          </div>
          <ImageLayout url="/model-3.webp" />
        </MainHomeLayout>
      </div>

      <div id="Model_S" className="snap-start snap-mandatory">
        <MainHomeLayout
          title="Model S"
          subtitle="Programe una consulta virtual"
          setColor="#000"
        >
          <div className=" flex flex-col z-40 pb-[48px] md:pb-[70px] gap-y-8 md:flex-row md:gap-x-6 mb-10 md:mb-0">
            <Button type="darkFill" title="Pedidoper sonalizado" />
            <Button
              customStyle="px-[8.2rem] md:px-[5.63rem] "
              type="lightFill"
              title="Saber más"
            />
          </div>
          <ImageLayout url="/model-s.webp" />
        </MainHomeLayout>
      </div>

      <div id="Model_X" className="snap-start snap-mandatory">
        <MainHomeLayout
          title="Model X"
          subtitle="Programe una consulta virtual"
          setColor="#000"
        >
          <div className=" flex flex-col z-40 pb-[48px] md:pb-[70px] gap-y-8 md:flex-row md:gap-x-6 mb-10 md:mb-0">
            <Button type="darkFill" title="Pedidoper sonalizado" />
            <Button
              customStyle="px-[8.2rem] md:px-[5.63rem]"
              type="lightFill"
              title="Saber más"
            />
          </div>
          <ImageLayout url="/model-x.webp" />
        </MainHomeLayout>
      </div>

      <div id="Powerwall" className="snap-start snap-mandatory">
        <MainHomeLayout
          title="Solar y Powerwall"
          subtitle="Energía para todos"
          setColor="#000"
        >
          <div className=" flex flex-col z-40 pb-[48px] md:pb-[70px] gap-y-8 md:flex-row md:gap-x-6 mb-10 md:mb-0">
            <Button
              customStyle="cursor-pointer border-[3px] border-[#393c41] bg-[#393c41] text-sm rounded font-medium text-white px-[8.2rem] md:px-[5.63rem] py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
              title="Saber más"
            />
          </div>
          <ImageLayout url="/powerwall.webp" />
        </MainHomeLayout>
      </div>

      <div id="Carga" className="snap-start snap-mandatory">
        <MainHomeLayout title="Accesorios" setColor="#000">
          <div className=" flex flex-col z-40 pb-[48px] md:pb-[70px] gap-y-8 md:flex-row md:gap-x-6 mb-10 md:mb-0">
            <Button
              customStyle="cursor-pointer border-[3px] border-black bg-black text-sm rounded font-medium text-white px-28 md:px-[5.63rem] py-2 inline-block transition-colors duration-300 hover:border-gray-800 hover:bg-gray-800"
              title="Comprar ahora"
            />
          </div>
          <ImageLayout url="/accessories.webp" />
          <div className="snap-end w-full hidden md:inline-block">
            <Footer />
          </div>
        </MainHomeLayout>
        <div className="snap-end w-full md:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
};
