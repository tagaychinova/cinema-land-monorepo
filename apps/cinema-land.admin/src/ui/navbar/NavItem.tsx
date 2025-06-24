import { Box, Stack, Tooltip } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  Icon: React.FC;
  title: string;
  href: string;
  showTitle: boolean;
}

export function NavItem({ title, Icon, href, showTitle }: Props) {
  const pathname = usePathname();

  const isActiveLink = pathname.startsWith(href);

  const link = (
    <Link href={href}>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          color: 'primary.contrastText',
          p: 3,
          pt: 2,
          pb: 2,
          ...(isActiveLink && { bgcolor: 'primary.dark' }),
          '&:hover': {
            bgcolor: 'primary.light',
          },
        }}
      >
        <Icon />
        <Box>{title}</Box>
      </Stack>
    </Link>
  );

  return <li>{showTitle ? link : <Tooltip title={title}>{link}</Tooltip>}</li>;
}
