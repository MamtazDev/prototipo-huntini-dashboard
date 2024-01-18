import carImg from "../../assets/car.png";
import cardImg1 from "../../assets/card-img1.png";
import sizeImg from "../../assets/full-arrow.png";
import badImg from "../../assets/single-bad.png";

const AgentDashboardCard = () => {
  return (
    <div className="pb-10">
      <div className="card_wrapper max-w-[320px] w-full bg-white rounded-[20px]">
        <div className="card_img">
          <img src={cardImg1} alt="card-img" />
        </div>

        <div className="card_content pt-5 pb-7 px-8">
          <div className="card_header py-3">
            <h5 className="text-lg font-bold text-[#463D3C] font-cabinet">
              Cobertura de luxo
            </h5>
            <p className="text-sm font-medium text-[#463D3C] font-cabinet">
              Moinhos de vento
            </p>
          </div>

          <div className="card_service flex gap-4 mb-5">
            <div className="size flex gap-2 flex-shrink-0">
              <img src={sizeImg} alt="" />
              <p className="text-sm font-medium font-cabinet">443m²</p>
            </div>
            <div className="bad flex gap-2 flex-shrink-0">
              <img src={badImg} alt="" />
              <p className="text-sm font-medium font-cabinet">3 Dorms</p>
            </div>
            <div className="car flex gap-2 flex-shrink-0">
              <img src={carImg} alt="" />
              <p className="text-sm font-medium font-cabinet">2 Vagas</p>
            </div>
          </div>

          <div className="card_footer flex items-center justify-between">
            <div className="atsight">
              <p className="text-sm text-[#463D3C] font-medium font-cabinet">
                à vista
              </p>
            </div>

            <div className="price">
              <p className="text-base font-bold text-[#463D3C] font-cabinet">
                R$ 1.900.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboardCard;
