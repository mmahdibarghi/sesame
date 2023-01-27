import { Select } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CustomizedInput, PriceDiv, InputContainer, CustomizedCol } from "./customized-styles";
import GroupSelect from "./group-select/select";

const memoryOptions = [
    { label: 'DDR2', value: 1},
    { label: 'DDR3', value: 2},
    { label: 'DDR4', value: 3},
]

const cpuOptions = [
    { label: 'Intel', value: 1},
    { label: 'AMD', value: 2},
    { label: 'ARM', value: 3},
];

const osOptions = [
    { label: 'Windows', value: 1},
    { label: 'Ubuntu', value: 2},
    { label: 'Fedora', value: 3},
];

const gpuOptions = [
    { label: 'Nvidia', value: 1},
    { label: 'AMD', value: 2},
];

const ddOptions = [
    { label: 'SanDisk', value: 1},
    { label: 'Western digital', value: 2},
    { label: 'Seagate', value: 3},
]

const Customized = () => {
    const [os, setOs] = useState(1);
    const [cpu, setCpu] = useState(1);
    const [cpuCores, setCpuCores ] = useState(1);
    const [gpu, setGpu ] = useState(1);
    const [dd, setDd] = useState(1);
    const [ddStorage, setDdStorage] = useState(1);
    const [memory, setMemory] = useState(1);
    const [memoryStorage, setMemoryStorage] = useState(1);
    
    const baseUrl = 'http://localhost:8000'
    
    const getOsLists = async() => {
        const result = await axios.get(baseUrl + '/devices/os-list/')
        console.log(result);
    };
    
    useEffect(()=>{
        getOsLists()
    },[]);
    
    return <>
        <Row>
            <CustomizedCol>
                <PriceDiv>هزینه ی سرویس <bold>35,500</bold> تومان</PriceDiv>
            </CustomizedCol>
        </Row>
        <Row>
            <CustomizedCol>
                <div>سیستم عامل:</div>
                <GroupSelect value={os} onChange={setOs} options={osOptions}/>
            </CustomizedCol>
        </Row>
        <Row>
            <CustomizedCol>
                <div>حافظه اصلی:</div>
                <GroupSelect value={memory} onChange={setMemory} options={memoryOptions}/>
                <InputContainer>
                    <CustomizedInput 
                        type="range" 
                        min={1}
                        max={10}
                        step={1} 
                        value={memoryStorage} 
                        onInput={(e)=>setMemoryStorage(parseInt(e.target.value))} 
                    />
                    <div>{128*(Math.pow(2,memoryStorage))} مگابایت</div>
                </InputContainer>
            </CustomizedCol>
        </Row>
        <Row>
            <CustomizedCol>
                <div>پردازشگر: </div>
                <GroupSelect value={cpu} onChange={setCpu} options={cpuOptions} />
                <InputContainer>
                    <CustomizedInput 
                        type="range" 
                        min={1}
                        max={12}
                        step={1} 
                        value={cpuCores} 
                        onInput={(e)=>setCpuCores(parseInt(e.target.value))} 
                    />
                    <div>{cpuCores} هسته</div>
                </InputContainer>
            </CustomizedCol>
        </Row>
        <Row>
            <CustomizedCol>
                <div>پردازشگر گرافیکی: </div>
                <GroupSelect value={gpu} onChange={setGpu} options={gpuOptions} />
                <InputContainer>
                    <CustomizedInput 
                        type="range" 
                        min={1}
                        max={10}
                        step={1} 
                        value={memoryStorage} 
                        onInput={(e)=>setMemoryStorage(parseInt(e.target.value))} 
                    />
                    <div>{128*(Math.pow(2,memoryStorage))} مگابایت</div>
                </InputContainer>
            </CustomizedCol>
        </Row>
        <Row>
            <CustomizedCol>
                <div>هارد دیسک:</div>
                <GroupSelect value={dd} onChange={setDd} options={ddOptions} />
                <InputContainer>
                    <CustomizedInput 
                        type="range" 
                        min={25}
                        max={150}
                        step={5} 
                        value={ddStorage} 
                        onInput={(e)=>setDdStorage(parseInt(e.target.value))} 
                    />
                    <div>{ddStorage} گیگابایت</div>
                </InputContainer>
            </CustomizedCol>
        </Row>
    </>
}

export default Customized;