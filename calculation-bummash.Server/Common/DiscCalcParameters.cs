using calculation_bummash.Server.Models.DiscCalcModel;

namespace calculation_bummash.Server.Common.DiscCalcParameters
{
    public class DiscCalcParameters
    {
        public static DiscCalcModel Calc(
            int height,
            int diameterDisc,
            int? diameterHole,
            int? deviationValue,
            double? s,
            double? s1,
            double? milimeterHole,
            int? weightSteel
        )
        {
            double radius = diameterDisc / 2;
            double volume = Math.PI * Math.Pow(radius, 2) * height;

            double milimeterDisc = volume * 0.78 / 100000000;

            double? milimeterDiscWithHole = milimeterDisc - milimeterHole;

            double? sphericity =
                0.393
                * Math.Pow(10, -6)
                * ((diameterDisc - diameterHole + (deviationValue * 2)) * (s - s1))
                / 10000;

            double? weight = volume * weightSteel;

            return new(
                volume: volume,
                milimeterDisc: milimeterDisc,
                milimeterDiscWithHole: milimeterDiscWithHole,
                sphericity: sphericity,
                weight: weight,
                newHeight: height,
                newDiameter: diameterDisc
            );
        }
    }
}
