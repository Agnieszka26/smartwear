import { colors } from "@/constants/colors";
import { ChartDataReChartType } from "@/core/types/pageProps/types";
import Box from "@mui/material/Box";
import { FC } from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BaseLineChartProps {
  label: string;
  label2: string;
  name: string;
  data: ChartDataReChartType[];
  domain1: number[];
  domain2?: number[];

  showAreaBetweenLines?: boolean;
}

const BaseLineChart: FC<BaseLineChartProps> = ({
  data,
  label,
  label2,
  domain1,
  domain2,
  showAreaBetweenLines,
}) => {
  const idGradient = "1";

  const setNullIfOutOfRange = () => {

    return typeof data !== "string" ? data.map((x) => {
      return {
       ...x,
        y: ((x.y > domain1[0]) && (x.y < domain1[1])) ? x.y : null,
        y2: domain2 ?
         ((x.y2 > domain2[0]) && (x.y < domain2[1]))
          ? x.y2 : null
          : x.y2,

      }
    })
      : data
  }
  const dataWithRange =
    typeof data !== "string"
      ? data?.map((x) => ({
        ...x,
        range: x.y !== undefined && x.y2 !== undefined ? [x.y, x.y2] : [],
      }))
      : undefined;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr" },
        alignItems: "center",
        justifyItems: "center",
        width: "100%",
        gap: "16px",
      }}
    >
      <ResponsiveContainer width="100%" aspect={5.0 / 3.0}>
        <ComposedChart

          data={
            showAreaBetweenLines
              ? dataWithRange
              : typeof data !== "string"
                ?setNullIfOutOfRange()
                : data
          }
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="time" tickFormatter={(time) => time.slice(0, -3)} />
          <YAxis
            yAxisId={"left"}
            dataKey="y"
            orientation="left"
            type="number"

            domain={domain1}

          />
          {domain2 && (
            <YAxis
              yAxisId={"right"}
              dataKey="y2"
              orientation="right"
              type="number"
              domain={domain2}

            />
          )}

          <Tooltip
            formatter={(value, name) => {
              if (
                name === "helperLineUp" ||
                name === "helperLineDown" ||
                name === "ah" ||
                name === "ah2" ||
                name === "range"
              )
                return [null, null];

              return value;
            }}
          />

          <Legend
            payload={[
              {
                value: label,
                type: "line",
                id: "ID01",
                color: colors.chartBlue,
              },
              { value: label2, type: "line", id: "ID02", color: colors.chartGreen, },
            ]}
          />
          <Area
            type="monotone"
            dot={false}
            activeDot={false}
            dataKey="ah"
            fill={colors.redLight}
            stroke={colors.red}
            yAxisId="left"
          />
          <Area
            type="monotone"
            dot={false}
            activeDot={false}
            dataKey="ah2"
            fill={colors.redLight}
            stroke={colors.red}
            yAxisId="left"
          />
          {showAreaBetweenLines && (
            <>
              <Area
                dataKey="range"
                stroke="#8884d8"
                strokeWidth={0}
                yAxisId="left"
                fill={`url(#${idGradient})`}
              />
              <defs>
                <linearGradient id={idGradient}>
                  <stop stopColor={colors.red} />
                  <stop stopColor={colors.redLight} />
                </linearGradient>
              </defs>
            </>
          )}

          <Line
            type="linear"
            stroke={colors.w3}
            dataKey={"helperLineUp"}
            dot={false}
            activeDot={false}
            yAxisId={domain2 ? "right" : "left"}
          />
          <Line
            type="linear"
            stroke={colors.w3}
            dataKey={"helperLineDown"}
            dot={false}
            activeDot={false}
            yAxisId={domain2 ? "right" : "left"}
          />
          <Line
            name={label}
            type='basis'
            dataKey={"y"}
            dot={false}
            yAxisId="left"
            strokeWidth={3}
            stroke={colors.chartBlue}
          />

          <Line
            name={label2}
            type="basis"
            dataKey="y2"
            strokeWidth={3}
            stroke={colors.chartGreen}
            dot={false}
            yAxisId={domain2 ? "right" : "left"}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BaseLineChart;
