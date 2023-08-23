import { Button } from "../../../../Components/Buttons";
import { ImageLayout, MainHomeLayout } from "../../../../Components/Layouts";



export const MainHome = () => {
  return (
    <>
      <div className="snap-start">
        <MainHomeLayout
          title="Model Y"
          subtitle="Concertar una prueba de conducción"
          setColor="#000"
        >
          <div className="pb-[70px] z-40 flex gap-x-6">
            <Button type="darkFill" title="Explorar inventario" />
            <Button type="lightFill" title="Pedido personalizado" />
          </div>
          <ImageLayout url="/model-y.webp" />
        </MainHomeLayout>
      </div>

      <div className="snap-start">
        <MainHomeLayout
          title="Model 3"
          subtitle="Concertar una prueba de conducción"
          setColor="#000"
        >
          <div className="pb-[70px] z-40 flex gap-x-6">
            <Button type="darkFill" title="Explorar inventario" />
            <Button type="lightFill" title="Pedido personalizado" />
          </div>
          <ImageLayout url="/model-3.webp" />
        </MainHomeLayout>
      </div>

      <div className="snap-start">
        <MainHomeLayout
          title="Model S"
          subtitle="Programe una consulta virtual"
          setColor="#000"
        >
          <div className="pb-[70px] z-40 flex gap-x-6">
            <Button type="darkFill" title="Pedidoper sonalizado" />

            <Button type="lightFill" title="Saber más" />
          </div>
          <ImageLayout url="/model-s.webp" />
        </MainHomeLayout>
      </div>

      <div className="snap-start">
        <MainHomeLayout
          title="Model X"
          subtitle="Programe una consulta virtual"
          setColor="#000"
        >
          <div className="pb-[70px] z-40 flex gap-x-6">
            <Button type="darkFill" title="Pedidoper sonalizado" />
            <Button type="lightFill" title="Saber más" />
          </div>
          <ImageLayout url="/model-x.webp" />
        </MainHomeLayout>
      </div>

      <div className="snap-start">
        <MainHomeLayout
          title="Solar y Powerwall"
          subtitle="Energía para todos"
          setColor="#000"
        >
          <div className="pb-[70px] z-40 flex gap-x-6">
            <Button
              customStyle="cursor-pointer border-[3px] border-[#393c41] bg-[#393c41] text-sm rounded font-medium text-white px-16 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
              title="Saber más"
            />
          </div>
          <ImageLayout url="/powerwall.webp" />
        </MainHomeLayout>
      </div>

      <div id="section-home" className="snap-start">
        <MainHomeLayout title="Accesorios" setColor="#000">
          <div className="pb-[70px] z-40 flex gap-x-6">
            <Button
              customStyle="cursor-pointer border-[3px] border-black bg-black text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors duration-300 hover:border-gray-800 hover:bg-gray-800"
              title="Comprar ahora"
            />
          </div>
          <ImageLayout url="/accessories.webp" />
        </MainHomeLayout>
      </div>
    </>
  );
};
