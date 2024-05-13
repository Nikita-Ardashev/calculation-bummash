namespace calculation_bummash.Server.Models.Deviation
{
    public class Deviation(
        int minHeight,
        int maxHeight,
        int minDiameter,
        int maxDiameter,
        int deviationValue,
        int allowancesValue
    )
    {
        public int MinHeight = minHeight;
        public int MaxHeight = maxHeight;
        public int MinDiameter = minDiameter;
        public int MaxDiameter = maxDiameter;
        public int DeviationValue { get; } = deviationValue;
        public int AllowancesValue { get; } = allowancesValue;
    }
}
