import { Link } from "react-router-dom";
import AgentDashboardCard from "../components/agentDashboard/AgentDashboardCard";

const AgentDashboard = () => {
  return (
    <section className="agent_dashboard bg-[#EBE8E3] ">
      <div className="content-container">
        <div className="section_heading py-10">
          <h1 className="font-cabinet text-[28px] text-secondary font-bold pb-4">
            Olá, Júnior Rodrigues!
          </h1>
          <p className="text-lg font-medium text-secondary">
            Você tem 154 imóveis cadastrados recentemente
          </p>
        </div>
        <div className="grid grid-cols-12">
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

        <div className="view_all_btn pb-[16px]">
          <Link
            to={"/find-properties"}
            className="text-lg font-medium text-[#F4EBFF] rounded-[80px] py-5 inline-block bg-[#463D3C] max-w-[240px] w-full text-center font-cabinet ">
            Visualizar todos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgentDashboard;
