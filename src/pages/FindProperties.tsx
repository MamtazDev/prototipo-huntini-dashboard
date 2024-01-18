import AgentDashboardCard from "../components/agentDashboard/AgentDashboardCard";

const FindProperties = () => {
  return (
    <section className="find_properties bg-[#EBE8E3]">
      <div className="content-container">
        <div className="section_heading py-16 text-center">
          <h1 className="text-3xl font-normal text-secondary mb-5">
            Resultados para
            <span className="font-bold"> Cobertura de Luxo </span>
          </h1>
          <p className="text-lg font-normal text-secondary">
            <span className="font-bold"> Foram encontrados 9 </span> itens para
            esta busca.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
          <div className="col-span-4">
            <AgentDashboardCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindProperties;
