import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    sortByName,
    sortByBirthday,
    setRoleFilter,
    setIsArchiveFilter,
} from "../redux/slices/dataSlice";
import Select, { components } from "react-select";

export default function Header() {
    const sortList = [
        { value: "name", label: "Name" },
        { value: "date", label: "Birth date" },
    ];
    const positionList = [
        { value: "all", label: "All" },
        { value: "driver", label: "Driver" },
        { value: "waiter", label: "Waiter" },
        { value: "cook", label: "Cook" },
    ];

    const dispatch = useDispatch();

    const [showArchived, setShowArchived] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(sortList[0]);
    const [selectedPositionOption, setSelectedPositionOption] = useState(
        positionList[0]
    );

    const NoInput = (props) => <components.Input {...props} readOnly />;

    const handleCheckboxChange = () => {
        setShowArchived(!showArchived);
        // dispatch(filterByArchive(!showArchived));
    };

    const handleSelectSortChange = (option) => {
        setSelectedSortOption(option);
        if (option.value === "name") {
            dispatch(sortByName());
        } else {
            dispatch(sortByBirthday());
        }
    };
    const handleSelectPositionChange = (option) => {
        setSelectedPositionOption(option);
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
