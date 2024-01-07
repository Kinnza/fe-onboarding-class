// Controllers component to display buttons for refreshing and sorting
import {FC} from "react";

export const Controllers: FC<{ onRefreshTable: () => void, onSortTable: () => void }> = ({
                                                                                             onRefreshTable,
                                                                                             onSortTable
                                                                                         }) => (
    <div className="controllers-container">
        <button onClick={onRefreshTable}>Refresh</button>
        <button onClick={onSortTable}>Sort</button>o
    </div>
);