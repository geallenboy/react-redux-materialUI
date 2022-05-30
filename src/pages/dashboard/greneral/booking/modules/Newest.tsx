import peopleFill from '@iconify/icons-eva/people-fill';
import roundVpnKey from '@iconify/icons-ic/round-vpn-key';
import { Icon } from '@iconify/react';
import { Avatar, Box, CardHeader, Paper, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRef } from 'react';
import Slider from 'react-slick';

import { CarouselControlsArrowsBasic1 } from '@/components/carousel';
import Label from '@/components/Label';
import { fDateTime } from '@/utils/formatTime';
import mockData from '@/utils/mock-data';

const MOCK_BOOKINGS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  avatar: mockData.image.avatar(index),
  bookdAt: mockData.time(index),
  roomNumber: 'A-21',
  roomType: (index === 1 && '标准间') || (index === 3 && '套房') || '单人间',
  person: '3-5',
  cover: `/static/mock-images/rooms/room-${index + 1}.jpg`
}));

function Item({ item }: any) {
  const { avatar, name, roomNumber, bookdAt, person, cover, roomType } = item;

  return (
    <Paper sx={{ mx: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      <Stack spacing={2.5} sx={{ p: 3, pb: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={name} src={avatar} />
          <div>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography
              variant="caption"
              sx={{ color: 'text.disabled', mt: 0.5, display: 'block' }}
            >
              {fDateTime(bookdAt)}
            </Typography>
          </div>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={3} sx={{ color: 'text.secondary' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon={roundVpnKey} width={16} height={16} />
            <Typography variant="caption">房间 {roomNumber}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon={peopleFill} width={16} height={16} />
            <Typography variant="caption">{person} 人</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ p: 1, position: 'relative' }}>
        <Label
          variant="filled"
          color={(roomType === '套房' && 'error') || (roomType === '标准间' && 'info') || 'warning'}
          sx={{ position: 'absolute', bottom: 16, right: 16, textTransform: 'capitalize' }}
        >
          {roomType}
        </Label>
        <Box component="img" src={cover} sx={{ borderRadius: 1.5, width: 1 }} />
      </Box>
    </Paper>
  );
}

export default function Newest() {
  const theme = useTheme();
  const carouselRef = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ py: 2 }}>
      <CardHeader
        title="最新预订"
        subheader="12 预定"
        action={
          <CarouselControlsArrowsBasic1
            arrowLine
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              position: 'static',
              '& button': { color: 'text.primary' }
            }}
          />
        }
        sx={{
          p: 0,
          mb: 3,
          '& .MuiCardHeader-action': { alignSelf: 'center' }
        }}
      />

      <Slider ref={carouselRef} {...settings}>
        {MOCK_BOOKINGS.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Slider>
    </Box>
  );
}
