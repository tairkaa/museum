import { ContentHeaderName } from "./__name/content-header__name";
import { ContentHeaderDescription } from "./__description/content-header__description";
import { ContentHeaderStatistics } from "./__statistics/content-header__statistics";
import { ContentHeaderFilters } from "./__filters/content-header__filters";
import "./content-header.css";

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
