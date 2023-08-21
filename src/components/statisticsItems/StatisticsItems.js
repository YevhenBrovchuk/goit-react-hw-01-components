import{SpanTxt} from './StatisticsItem.styled'



export const StatisticsItems = ({ items: { label, percentage } }) => {
    return (
        <>
      <SpanTxt class="label">{label}</SpanTxt>
      <span class="percentage">{percentage}%</span>
    </>
    )
}