import eyeFill from '@iconify/icons-eva/eye-fill';
import messageCircleFill from '@iconify/icons-eva/message-circle-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import { Icon } from '@iconify/react';
import { Avatar, Box, Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';

import SvgIconStyle from '@/components/SvgIconStyle';
import { PATH_DASHBOARD } from '@/routes/paths';
import { fShortenNumber } from '@/utils/formatNumber';
import { fDate } from '@/utils/formatTime';

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

function PostItem({ post }: any) {
  const { cover, title, view, comment, share, author, createdAt } = post;
  const linkTo = `${PATH_DASHBOARD.blog.root}/post/${paramCase(title)}`;

  const POST_INFO = [
    { number: comment, icon: messageCircleFill },
    { number: view, icon: eyeFill },
    { number: share, icon: shareFill }
  ];

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <Box sx={{ position: 'relative', paddingTop: 'calc(100% * 3 / 4)' }}>
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute'
            }}
          />
          <Avatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              left: 24,
              zIndex: 9,
              width: 32,
              height: 32,
              bottom: -16,
              position: 'absolute'
            }}
          />
          <CoverImgStyle alt="cover" src={cover} />
        </Box>

        <CardContent sx={{ pt: 4.5 }}>
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: 'text.disabled', display: 'block' }}
          >
            {fDate(createdAt)}
          </Typography>

          <Link
            to={linkTo}
            color="inherit"
            variant="subtitle2"
            component={RouterLink}
            sx={{
              height: 44,
              overflow: 'hidden',
              WebkitLineClamp: 2,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical'
            }}
          >
            {title}
          </Link>

          <Box
            sx={{
              mt: 3,
              display: 'flex',
              flexWrap: 'wrap',
              color: 'text.disabled',
              justifyContent: 'flex-end'
            }}
          >
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5
                }}
              >
                <Box component={Icon} icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default function PostRecent({ posts }: any) {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 10, mb: 5 }}>
        最近发布的帖子
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post: any) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
}
