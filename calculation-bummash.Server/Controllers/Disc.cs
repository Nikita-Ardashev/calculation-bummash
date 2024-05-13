using calculation_bummash.Server.Common.DiscCalcParameters;
using calculation_bummash.Server.Common.DiscDeviationParameters;
using calculation_bummash.Server.Models.Deviation;
using calculation_bummash.Server.Models.DiscCalcModel;
using calculation_bummash.Server.Models.DiscModel;
using Microsoft.AspNetCore.Mvc;

namespace calculation_bummash.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiscController : Controller
    {
        [Route("calc")]
        [HttpPost]
        public List<DiscCalcModel>? Calc(DiscModel model)
        {
            int height = model.Height;
            int diameterDisc = model.DiameterDisc;
            int diameterHole = model.DiameterHole;
            Deviation? deviation = DiscDeviationParameters.FirstOrThrow(diameterDisc, height);

            if (deviation == null)
            {
                return null;
            }

            double nominalS = Math.PI * Math.Pow(diameterDisc / 2, 2);
            double nominalS1 = Math.PI * Math.Pow(diameterHole / 2, 2);
            double maximalS = Math.PI * Math.Pow((diameterDisc + deviation.AllowancesValue) / 2, 2);
            double maximalS1 =
                Math.PI * Math.Pow((diameterHole - deviation.AllowancesValue) / 2, 2);

            DiscCalcModel holeNominal = DiscCalcParameters.Calc(
                height,
                diameterHole,
                null,
                null,
                null,
                null,
                null,
                null
            );
            DiscCalcModel holeMaximal = DiscCalcParameters.Calc(
                height + deviation.AllowancesValue,
                diameterHole - deviation.AllowancesValue,
                null,
                null,
                null,
                null,
                null,
                null
            );

            DiscCalcModel discNominal = DiscCalcParameters.Calc(
                height,
                diameterDisc,
                diameterHole,
                deviation.AllowancesValue,
                nominalS,
                nominalS1,
                holeNominal.MilimeterDisc,
                1
            );
            DiscCalcModel discMaximal = DiscCalcParameters.Calc(
                height + deviation.AllowancesValue,
                diameterDisc + deviation.AllowancesValue,
                diameterHole,
                deviation.AllowancesValue,
                maximalS,
                maximalS1,
                holeMaximal.MilimeterDisc,
                1
            );
            return [holeNominal, holeMaximal, discNominal, discMaximal];
        }
    }
}
