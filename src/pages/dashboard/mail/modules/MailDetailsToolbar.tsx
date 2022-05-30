import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import roundReply from '@iconify/icons-ic/round-reply';
import { Icon } from '@iconify/react';
import { Box, IconButton, Link, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';

import { MAvatar, MHidden } from '@/components/@material-extend';
import { PATH_DASHBOARD } from '@/routes/paths';
import createAvatar from '@/utils/createAvatar';
import { fDateTimeSuffix } from '@/utils/formatTime';

const RootStyle = styled('div')(({ theme }) => ({
  height: 84,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  justifyContent: 'space-between'
}));

export default function MailDetailsToolbar({ mail, ...other }) {
  const navigate = useNavigate();
  const { systemLabel, customLabel } = useParams();
  const baseUrl = PATH_DASHBOARD.mail.root;

  const handleBack = () => {
    if (systemLabel) {
      return navigate(`${baseUrl}/${systemLabel}`);
    }
    if (customLabel) {
      return navigate(`${baseUrl}/label/${customLabel}`);
    }
    return navigate(`${baseUrl}/inbox`);
  };

  return (
    <RootStyle {...other}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title="Back">
          <IconButton onClick={handleBack}>
            <Icon icon={arrowIosBackFill} width={20} height={20} />
          </IconButton>
        </Tooltip>

        <MAvatar
          alt={mail.from.name}
          src={mail.from.avatar}
          color={createAvatar(mail.from.name).color}
        >
          {createAvatar(mail.from.name).name}
        </MAvatar>

        <Box sx={{ ml: 2 }}>
          <Typography display="inline" variant="subtitle2">
            {mail.from.name}
          </Typography>
          <Link variant="caption" sx={{ color: 'text.secondary' }}>
            &nbsp; {`<${mail.from.email}>`}
          </Link>
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
            To:&nbsp;
            {mail.to.map((person) => (
              <Link color="inherit" key={person.email}>
                {person.email}
              </Link>
            ))}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <MHidden width="smDown">
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {fDateTimeSuffix(mail.createdAt)}
          </Typography>
          <Tooltip title="回复">
            <IconButton>
              <Icon icon={roundReply} width={20} height={20} />
            </IconButton>
          </Tooltip>
        </MHidden>
        <Tooltip title="更多选项">
          <IconButton>
            <Icon icon={moreVerticalFill} width={20} height={20} />
          </IconButton>
        </Tooltip>
      </Box>
    </RootStyle>
  );
}
