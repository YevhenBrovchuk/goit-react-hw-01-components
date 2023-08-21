import { StatisticsItems } from "components/statisticsItems/StatisticsItems"
import { StatisticsTitel } from "components/statisticsTitel/StatisticsTitel"
import { Ul, Section, Li } from "./Statistics.styled"
export const Statistics = ({title, stats }) => {
    return (
        
        <Section class="statistics">
            <StatisticsTitel tite={ title}/>
            <Ul class="stat-list">
                {stats.map(stat => (
                    <Li key={stat.id} class="item">
                        <StatisticsItems items={stat} />
                    </Li>
                ))}
</Ul>
  
</Section>
    )
}