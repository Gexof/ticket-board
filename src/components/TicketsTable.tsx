interface IProps {}

const TicketsTable = ({}: IProps) => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>TICKET</th>
        <th>CUSTOMER</th>
        <th>PRIORTY</th>
        <th>STATUS</th>
      </tr>
    </table>
  );
};

export default TicketsTable;
