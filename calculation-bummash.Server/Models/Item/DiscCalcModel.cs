namespace calculation_bummash.Server.Models.DiscCalcModel
{
    public class DiscCalcModel(
        double volume,
        double milimeterDisc,
        int newHeight,
        int newDiameter,
        double? milimeterDiscWithHole = null,
        double? sphericity = null,
        double? weight = null
    )
    {
        public double Volume { get; set; } = volume;
        public double MilimeterDisc { get; set; } = milimeterDisc;
        public double? MilimeterDiscWithHole { get; set; } = milimeterDiscWithHole;
        public double? Sphericity { get; set; } = sphericity;
        public double? Weight { get; set; } = weight;
        public int NewHeight { get; set; } = newHeight;
        public int NewDiameter { get; set; } = newDiameter;
    }
}
