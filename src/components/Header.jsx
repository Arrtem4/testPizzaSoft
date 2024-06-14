import { useState } from "react";
// import { useDispatch } from "react-redux";
import Select, { components } from "react-select";

export default function Header() {

    // const dispatch = useDispatch();

    const [showArchived, setShowArchived] = useState(false);

    const NoInput = (props) => <components.Input {...props} readOnly />;
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

    const handleCheckboxChange = () => {
        setShowArchived((prevShowArchived) => !prevShowArchived);
    };

    // const [selectedOption, setSelectedOption] = useState("");

    // const handleSelectChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

    return (
        <section className="header">
            <div className="header-sort center">
                <p className="header-label">Sort by:</p>
                <div className="select-wrapper">
                    <Select
                        components={{ Input: NoInput }}
                        options={sortList}
                        defaultValue={sortList[0]}
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
