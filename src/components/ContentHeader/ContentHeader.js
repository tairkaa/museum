import { ContentHeaderName } from "./-Name/ContentHeader-Name";
import { ContentHeaderDescription } from "./-Description/ContentHeader-Description";
import { ContentHeaderStatistics } from "./-Statistics/ContentHeader-Statistics";
import { ContentHeaderFilters } from "./-Filters/ContentHeader-Filters";
import "./ContentHeader.css";

export const ContentHeader = () => {
  const manufacturerName = "Intel";
  const description =
    "Intel является одним из крупнейших мировых производителей полупроводниковых микросхем и одним из главных лидеров в области разработки процессоров для персональных компьютеров, ноутбуков и серверов. Корпорация была основана в 1968 году в США и внесла огромный вклад в развитие индустрии микропроцессоров.";

  return (
    <div className="content-header">
      <ContentHeaderName manufacturerName={manufacturerName} />
      <ContentHeaderDescription description={description} />
      <ContentHeaderStatistics />
      <ContentHeaderFilters />
    </div>
  );
};
