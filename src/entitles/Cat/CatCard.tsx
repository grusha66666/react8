import FlexContainer from "../../shared/ui/FlexContainer"; 
import Panel from "../../shared/ui/Panel";
import Text from "../../shared/ui/Text";
import { ICat } from "../../entitles/Cat/model";
interface ICatCardProps{
    cat : ICat
}
function CatCard({ cat }: ICatCardProps) {

    const {id, name, color, breed} = cat

    return (
        <Panel padding={5}>
            <FlexContainer>
                <Text>
                    #{id}: {name}
                </Text>
                <Text>
                    Жанр: {color}
                </Text>
                <Text>
                    Режисер: {breed}
                </Text>
            </FlexContainer>
        </Panel>
    );
}

export default CatCard;