import ResourceCurriculum from "./Components/Resources/ResourceCurriculum";
import ResourceInfo from "./Components/Resources/ResourceInfo";
import ResourceSLPInfo from "./Components/Resources/ResourceSLPInfo";
import ResourceSpeechReadingConnection from "./Components/Resources/ResourceSpeechReadingConnection";

const Resources = () => {
  return (
    <div className="bg-neutral py-10">
      <ResourceSpeechReadingConnection />
      <ResourceInfo />
      <ResourceSLPInfo />
      <ResourceCurriculum />
    </div>
  );
};

export default Resources;
