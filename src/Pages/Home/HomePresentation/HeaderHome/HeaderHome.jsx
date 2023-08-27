import { Button } from "../../../../Components/Buttons";
import { MainHomeLayout, VideoLayout } from "../../../../Components/Layouts";

export const HeaderHome = () => {
  return (
    <div id="nav-bar" className="snap-mandatory snap-start">
      <div id="top-home">
        <MainHomeLayout
          title="Disfrute de Tesla"
          subtitle="Programe una prueba de conducción hoy mismo"
          setColor="#fff"
          textColor="text-white"
        >
          <div className="pb-[88px] z-40 mb-8 md:mb-0">
            <Button type="outline" title="Prueba de conducción" />
          </div>
          <VideoLayout url="/video.webm" />
        </MainHomeLayout>
      </div>
    </div>
  );
};
