import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    sortProfiles,
    setRoleFilter,
    setIsArchiveFilter,
} from "../redux/slices/dataSlice";
import Select, { components } from "react-select";
import { sortList, positionList } from "../data/optionLists";

export default function Header() {
    const dispatch = useDispatch();

    const [showArchived, setShowArchived] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(sortList[0]);
    const [selectedPositionOption, setSelectedPositionOption] = useState(
        positionList[0]
    );

    const NoInput = (props) => <components.Input {...props} readOnly />;

    const handleCheckboxChange = () => {
        setShowArchived(!showArchived);
        dispatch(setIsArchiveFilter(!showArchived));
    };
    const handleSelectSortChange = (option) => {
        setSelectedSortOption(option);
        dispatch(sortProfiles(option.value));
    };
    const handleSelectPositionChange = (option) => {
        setSelectedPositionOption(option);
        dispatch(setRoleFilter(option.value));
    };

    return (
        <section className="header">
            <div className="header-sort center">
                <p className="header-label">Sort by:</p>
                <div className="select-wrapper">
                    <Select
                        components={{ Input: NoInput }}
                        options={sortList}
                        onChange={handleSelectSortChange}
                        defaultValue={sortList[0]}
                        value={selectedSortOption}
                    />
                </div>
            </div>
            <div className="header-position center">
                <p className="header-label">Position:</p>
                <div className="select-wrapper">
                    <Select
                        components={{ Input: NoInput }}
                        options={positionList}
                        defaultValue={positionList[0]}
                        onChange={handleSelectPositionChange}
                        value={selectedPositionOption}
                    />{" "}
                </div>
            </div>
            <div className="header-archive center">
                <label className="header-label-checkbox">
                    <input
                        className="header-label"
                        type="checkbox"
                        checked={showArchived}
                        onChange={handleCheckboxChange}
                    />
                    Archived
                </label>
            </div>
        </section>
    );
}
