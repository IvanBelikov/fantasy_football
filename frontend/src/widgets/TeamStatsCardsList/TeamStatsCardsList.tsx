import { Fragment, type FC } from 'react'

import { FSLoader } from '@base/ui'
import { TeamStatsCard } from '@base/entities'
import { useTeamsByYear } from '@base/entities'

import { CustomGrid, LoadMoreContainer } from './TeamStatsCardsList.styles'
import type { TeamStatsCardsListProps } from './TeamStatsCardsList.props'
import { Button, CircularProgress } from '@mui/material'

export const TeamStatsCardsList: FC<TeamStatsCardsListProps> = ({ year }) => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useTeamsByYear(year)

  const fetchMorePlayers = () => fetchNextPage()

  if (isLoading) {
    return <FSLoader />
  }

  return (
    <CustomGrid container spacing={2}>
      {data?.pages.map((page, pageIndex) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <pageIndex use case was taken from https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries>
        <Fragment key={pageIndex}>
          {page?.data.map((team) => (
            <TeamStatsCard key={team.team.id} stats={team} />
          ))}
        </Fragment>
      ))}
      <LoadMoreContainer>
        {hasNextPage &&
          (isFetchingNextPage ? (
            <CircularProgress />
          ) : (
            <Button onClick={fetchMorePlayers} variant={'outlined'}>
              Load more
            </Button>
          ))}
      </LoadMoreContainer>
    </CustomGrid>
  )
}
