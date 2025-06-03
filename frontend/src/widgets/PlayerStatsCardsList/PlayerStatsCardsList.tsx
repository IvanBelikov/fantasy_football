import { type FC, Fragment } from 'react'
import { Button, CircularProgress, Grid } from '@mui/material'

import { PlayerStatsCard, usePlayersByYear } from '@base/entities'

import type { PlayerStatsCardsListProps } from './PlayerStatsCardsList.props'
import { FSLoader } from '@base/ui'
import { LoadMoreContainer } from './PlayerStatsCardsList.styles'

export const PlayerStatsCardsList: FC<PlayerStatsCardsListProps> = ({
  year,
}) => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    usePlayersByYear(year)

  if (isLoading) {
    return <FSLoader />
  }

  return (
    <Grid container spacing={2}>
      {data?.pages.map((page, pageIndex) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <pageIndex use case was taken from https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries>
        <Fragment key={pageIndex}>
          {page?.data.map((player) => (
            <PlayerStatsCard key={player.player.id} stats={player} />
          ))}
        </Fragment>
      ))}
      <LoadMoreContainer>
        {hasNextPage &&
          (isFetchingNextPage ? (
            <CircularProgress />
          ) : (
            <Button onClick={() => fetchNextPage()} variant={'outlined'}>
              Load more
            </Button>
          ))}
      </LoadMoreContainer>
    </Grid>
  )
}
