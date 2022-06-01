import { TinyLineChart } from '@garron/react-chart';
import trendingDownFill from '@iconify/icons-eva/trending-down-fill';
import trendingUpFill from '@iconify/icons-eva/trending-up-fill';
import { Icon } from '@iconify/react';
import { Box, Card, Stack, Typography } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { fNumber, fPercent } from '@/utils/formatNumber';
const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 24,
  height: 24,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  color: theme.palette.success.main,
  backgroundColor: alpha(theme.palette.success.main, 0.16)
}));

const PERCENT = 0.06;
const TOTAL_SALES = 4876;
const data = [40, 70, 75, 70, 50, 28, 7, 64, 38, 27];

export default function SalesProfit() {
  const theme = useTheme();
  const config = {
    color: theme.palette.chart.red[0],
    height: 80,
    width: 120,
    autoFit: false,
    smooth: true,
    data,
    tooltip: {
      customContent: function (x: any, data: { data: { y: number } }[]) {
        return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
      }
    }
  };
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" paragraph>
          销售利润
        </Typography>
        <Typography variant="h3" gutterBottom>
          {fNumber(TOTAL_SALES)}
        </Typography>

        <Stack direction="row" alignItems="center" flexWrap="wrap">
          <IconWrapperStyle
            sx={{
              ...(PERCENT < 0 && {
                color: 'error.main',
                bgcolor: alpha(theme.palette.error.main, 0.16)
              })
            }}
          >
            <Icon width={16} height={16} icon={PERCENT >= 0 ? trendingUpFill : trendingDownFill} />
          </IconWrapperStyle>

          <Typography variant="subtitle2" component="span">
            {PERCENT > 0 && '+'}
            {fPercent(PERCENT)}
          </Typography>
          <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
            &nbsp;比上周
          </Typography>
        </Stack>
      </Box>
      <TinyLineChart {...config} />
    </Card>
  );
}