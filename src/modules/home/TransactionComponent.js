import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction:column;
color:black;
align-items:center;
padding:10px 22px;
font-size:20px;
width:100%;
gap:10px;
font-weight:bold;
& input{
    padding:10px 12px;
    border-radius:12px;
    background:#e6e8e9;
    border:1px solid #e6e8e9;
    outline:none;
    width:100%;

}
`;

const Cell = styled.div`
display:flex;
flex-direction:row;
padding:10px 15px;
font-size:14px;
border-radius:2px;
align-items:center;
font-weight:normal;
width:100%;
justify-content:space-between;
border:1px solid #e6e8e9;
border-right:4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;

const TransactionCell = (props) => {
    return(
        <Cell isExpense={props.payload?.type === "EXPENSE"}>
            <span>{props.payload.desc}</span>
            <span>${props.payload.amount}</span>
        </Cell>
    );
};

const TransactionComponent = (props) => {
    const [searchText, updateSearchText] = useState("");
    // const [filteredTransaction, updateTxn] = useState(props.transactions);
    return(
        <Container>
            Transactions
            <input placeholder="Search"
            value={searchText}
            onChange={(e) => updateSearchText(e.target.value)}
            />
            {props.transactions?.length ?
             props.transactions.map((payload) => (
                <TransactionCell payload={payload}/>
             ))

            :""}
            
        </Container>

    )
}

export default TransactionComponent