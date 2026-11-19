export default function Table({ PCCount, PlayStationCount, XboxCount, NintendoCount }) {
    return (
        <table className="platform-table">
            <caption>Number of Games on each Platform</caption>
            <thead>
                <tr>
                    <th scope="col">
                        PC Games
                    </th>
                    <th scope="col">
                        PlayStation Games
                    </th>
                    <th scope="col">
                        Xbox Games
                    </th>
                    <th scope="col">
                        Nintendo Games
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{PCCount}</td>
                    <td>{PlayStationCount}</td>
                    <td>{XboxCount}</td>
                    <td>{NintendoCount}</td>
                </tr>
            </tbody>
        </table>
    );
}