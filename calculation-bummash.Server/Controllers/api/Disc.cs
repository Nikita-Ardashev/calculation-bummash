// using calculation_bummash.Server.Common.DiscCalcParameters;
// using calculation_bummash.Server.Common.DiscDeviationParameters;
// using calculation_bummash.Server.Models.DiscCalcModel;
// using calculation_bummash.Server.Models.Deviation;
// using calculation_bummash.Server.Models.DiscModel;
// using Microsoft.AspNetCore.Mvc;

// [Route("api/[controller]")]
// [ApiController]
// public class DiscController : ControllerBase
// {
//     [Route("api/Disc/Calc")]
//     [HttpPost]
//     public List<DiscCalcModel> Calc(DiscModel model)
//     {
//         int height = model.Height;
//         int diameterDisc = model.Diameter;
//         int diameterHole = model.DiameterHole;
//         double s = Math.PI * Math.Pow(diameterDisc / 2, 2);
//         double s1 = Math.PI * Math.Pow(diameterHole / 2, 2);
//         Deviation deviation = DiscDeviationParameters.FirstOrThrow(model.Diameter, model.Height);

//         int deviationDiameterDisc =
//             diameterDisc + deviation.DeviationValue + deviation.AllowancesValue;
//         int deviationDiameterHole =
//             diameterHole + deviation.DeviationValue - deviation.AllowancesValue;
//         ;
//         DiscCalcModel holeNominal = DiscCalcParameters.Calc(
//             height,
//             diameterHole,
//             null,
//             null,
//             null,
//             null,
//             null,
//             null
//         );
//         DiscCalcModel holeMaximal = DiscCalcParameters.Calc(
//             height,
//             diameterHole - deviation.DeviationValue,
//             null,
//             null,
//             null,
//             null,
//             null,
//             null
//         );

//         DiscCalcModel discNominal = DiscCalcParameters.Calc(
//             height,
//             diameterDisc,
//             diameterHole,
//             deviation.DeviationValue,
//             s,
//             s1,
//             holeNominal.MilimeterDisc,
//             1
//         );
//         DiscCalcModel discMaximal = DiscCalcParameters.Calc(
//             height,
//             diameterDisc + deviation.DeviationValue,
//             diameterHole,
//             deviation.DeviationValue,
//             s,
//             s1,
//             holeNominal.MilimeterDisc,
//             1
//         );

//         return [holeNominal, holeMaximal, discNominal, discMaximal];
//     }
// }
