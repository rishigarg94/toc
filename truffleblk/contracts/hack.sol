pragma solidity 0.5.16;
pragma experimental ABIEncoderV2;

contract hack{
    
    struct prescription{
        
        bytes32 _doctor_name;
        bytes32 _patient_name;
        uint256 _timestamp;
        
        string  _description;
    }
    
    struct patient{
        address _patient_hash;
        bytes32 _patient_name;
        bytes32 _patient_dob;
        bytes32 _patient_previous_allergies;
        bytes32 _patient_blood_group;
        uint _patient_balance;
        uint last_transaction;
        bytes32 _patient_contact_number;
        bytes32 _patient_emergency_contact_number;
        uint _patient_prescription_length;
        uint _patient_flag;
        bytes32 [] _prescription_list;
        mapping(bytes32=>prescription) _patient_prescription_record;
    }
    
    struct doctor{
        address _doctor_hash;
        bytes32 _doctor_name;
        bytes32 _doctor_speciality;
        bytes32 _doctor_phone_number;
        bytes32 _doctor_address;
        uint _doctor_balance;
        uint _doctor_flag;
    }
    
    struct pharmacy{
        address _pharmacy_hash;
        bytes32 _pharmacy_name;
        bytes32 _pharmacy_address;
        bytes32 _pharmacy_phone_number;
        uint _pharmacy_balance;
        uint _pharmacy_flag;
    }
    
    struct pathology{
        address _path_hash;
        bytes32 _path_name;
        bytes32 _path_address;
        bytes32 _path_phone_number;
        uint _path_balance;
        uint _path_flag;
    }
    
    mapping (address=>patient)  patient_records  ;
    mapping(address=>doctor)doctor_record;
    mapping(address=>pharmacy)pharmacy_record;
    mapping(address=>pathology)pathlab_record;
    
    address owner;
    
    constructor () public {
        owner=msg.sender;
    }
    
    modifier only_owner(){
        require(msg.sender==owner);
        _;
    }
    
    modifier only_self(){
        require(patient_records[msg.sender]._patient_flag ==1);
        _;
    }
    
    modifier only_doctor(){
        require(doctor_record[msg.sender]._doctor_flag ==1);
        _;
    }
    
    modifier only_pharmacy(){
        require(pharmacy_record[msg.sender]._pharmacy_flag==1);
        _;
    }
    
    modifier only_pathology(){
        require(pathlab_record[msg.sender]._path_flag==1);
        _;
    }
    
    //==================================function to convert datatypes==================================
    
    function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;
        while(i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }
    
    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
        return 0x0;
    }

    assembly {
        result := mload(add(source, 32))
    }
}
    
    //===================================================================================================
    
    function add_patient(
    address patient_hash,
    string memory  name,
    string memory  dob,
    string memory  prev_allergies,
    string memory  blood_group,
    uint balance,
    string memory  contact_number,
    string memory  emergency_contact_number,
    uint description_length,
    uint patient_flag
    
    ) public only_owner{
        patient_records[patient_hash]._patient_hash=patient_hash;
        patient_records[patient_hash]._patient_name=stringToBytes32(name);
        patient_records[patient_hash]._patient_dob=stringToBytes32(dob);
        patient_records[patient_hash]._patient_previous_allergies=stringToBytes32(prev_allergies);
        patient_records[patient_hash]._patient_blood_group=stringToBytes32(blood_group);
        patient_records[patient_hash]._patient_balance=balance;
        patient_records[patient_hash].last_transaction=0;
        patient_records[patient_hash]._patient_contact_number=stringToBytes32(contact_number);
        patient_records[patient_hash]._patient_emergency_contact_number=stringToBytes32(emergency_contact_number);
        patient_records[patient_hash]._patient_prescription_length=description_length;
        patient_records[patient_hash]._patient_flag=patient_flag;

        
    }
    
    function add_doctor(
        address _doctor_hash,
        string memory  name,
        string memory  specialisation,
        string memory phone_number,
        string memory  address_of_doctor,
        uint balance,
        uint flag) public only_owner{
        
        doctor_record[_doctor_hash]=
        doctor(
            _doctor_hash,
            stringToBytes32(name),
            stringToBytes32(specialisation),
            stringToBytes32(phone_number),
            stringToBytes32(address_of_doctor),
            balance,
            flag);
        
        
    }
    
    function add_pharmacy(
        address hash,
        string memory name,
        string memory temp_address,
        string memory phone_number,
        uint balance,
        uint flag) public only_owner{
        
        pharmacy_record[hash]._pharmacy_hash=hash;
        pharmacy_record[hash]._pharmacy_name=stringToBytes32(name);
        pharmacy_record[hash]._pharmacy_address=stringToBytes32(temp_address);
        pharmacy_record[hash]._pharmacy_phone_number=stringToBytes32(phone_number);
        pharmacy_record[hash]._pharmacy_balance=balance;
        pharmacy_record[hash]._pharmacy_flag=flag;
            
        }
        
        
    function add_path(
        address hash,
        string memory name,
        string memory temp_address,
        string memory phone_number,
        uint balance,
        uint flag) public only_owner{
        
        pathlab_record[hash]._path_hash=hash;
        pathlab_record[hash]._path_name=stringToBytes32(name);
        pathlab_record[hash]._path_address=stringToBytes32(temp_address);
        pathlab_record[hash]._path_phone_number=stringToBytes32(phone_number);
        pathlab_record[hash]._path_balance=balance;
        pathlab_record[hash]._path_flag=flag;

        }



    function role_define() public view returns(
        uint role_id
    )
    {   role_id=0;
        if(patient_records[msg.sender]._patient_flag ==1){
            role_id=1;
        }
        else if (doctor_record[msg.sender]._doctor_flag ==1){
            role_id=2;
        }
        else if(pharmacy_record[msg.sender]._pharmacy_flag ==1){
            role_id=3;
        }
        else if(pathlab_record[msg.sender]._path_flag ==1){
            role_id=4;
        }
        else if(msg.sender ==owner){
            role_id=5;
        }
        else{
            role_id=0;
        }
        
    }
    
    function  show_self_deatils (address _patient_hash)  public view only_self 
    returns (
        address patient_hash,
        string memory patient_name,
        string memory patient_dob,
        string memory patient_previous_allergies,
        string memory patient_blood_group,
        string memory patient_contact_number,
        string memory patient_emergency_contact_number,
        uint patient_balance,
        uint patient_prescription_length
        
        
        ) {
            patient storage temp = patient_records[_patient_hash];
            
                patient_hash = temp._patient_hash;
                patient_name = bytes32ToString(temp._patient_name);
                patient_dob = bytes32ToString(temp._patient_dob);
                patient_previous_allergies = bytes32ToString(temp._patient_previous_allergies);
                patient_blood_group = bytes32ToString(temp._patient_blood_group);
                patient_contact_number = bytes32ToString(temp._patient_contact_number);
                patient_emergency_contact_number = bytes32ToString(temp._patient_emergency_contact_number);
                patient_balance = temp._patient_balance;
                patient_prescription_length = temp._patient_prescription_length;
    }
    
    function search_doctor(address _doctor_hash) public view only_self
    returns (
        address doctor_hash,
        string memory doctor_name,
        string memory doctor_address,
        string memory doctor_phone_number,
        string memory doctor_speciality
        
        ){
            doctor memory temp =doctor_record[_doctor_hash];
            
                doctor_hash=temp._doctor_hash;
                doctor_name=bytes32ToString(temp._doctor_name);
                doctor_address=bytes32ToString(temp._doctor_address);
                doctor_phone_number=bytes32ToString(temp._doctor_phone_number);
                doctor_speciality=bytes32ToString(temp._doctor_speciality);
            
    
    }
    
    function payment(address reciever_hash,uint amount)  public  only_self returns (uint code) {
        code=0;
        address sender_hash=msg.sender;
        uint available_balance=patient_records[sender_hash]._patient_balance;
        if(available_balance >= amount){
            
            
            if (doctor_record[reciever_hash]._doctor_flag ==1){
                
                code=1;
                patient_records[sender_hash].last_transaction=1;
                doctor_record[reciever_hash]._doctor_balance +=amount;
                patient_records[sender_hash]._patient_balance-=amount;
            }
            else if(pharmacy_record[reciever_hash]._pharmacy_flag ==1){
                
                code=1;
                patient_records[sender_hash].last_transaction=1;
                pharmacy_record[reciever_hash]._pharmacy_balance+=amount;
                patient_records[sender_hash]._patient_balance-=amount;
            }
            else if(pathlab_record[reciever_hash]._path_flag ==1){
                
                code=1;
                patient_records[sender_hash].last_transaction=1;
                pathlab_record[reciever_hash]._path_balance+=amount;
                patient_records[sender_hash]._patient_balance-=amount;
            }
            else{
                
                code=0;
                patient_records[sender_hash].last_transaction=0;
            }

            }
            else{
                code=2;
                patient_records[sender_hash].last_transaction=2;
                
            }
         
        
    }


    function patient_last_transaction() public view only_self returns(uint code){
        code=patient_records[msg.sender].last_transaction;
        
    }
    
    function get_total_number_of_prescriptions_by_pharma(address patient_hash) public view only_pharmacy returns(uint total_count){
        total_count=0;
        if(patient_records[patient_hash]._patient_flag==1){
            total_count=patient_records[patient_hash]._patient_prescription_length;
        }
        else{
            total_count=0;
        }
    }

    function get_total_number_of_prescriptions_by_pathalogy(address patient_hash) public view only_pathology returns(uint total_count){
        total_count=0;
        if(patient_records[patient_hash]._patient_flag==1){
            total_count=patient_records[patient_hash]._patient_prescription_length;
        }
        else{
            total_count=0;
        }
    }

    function give_prescription(address _doctor_hash,address _patient_hash,string memory  _details_of_prescription) public only_doctor{
        
        string memory  _current_patient=bytes32ToString(patient_records[_patient_hash]._patient_name);
        string memory  _current_doctor =bytes32ToString( doctor_record[_doctor_hash]._doctor_name);
        uint256 _current_time=block.timestamp;
        
        patient_records[_patient_hash]._patient_prescription_length+=1;  //increasing the length of the prescription array.
        bytes32 prescription_hash= bytes32(keccak256(abi.encodePacked(_doctor_hash,_patient_hash,_current_time,_details_of_prescription)));  //computing the hash or a prescription.
        patient_records[_patient_hash]._prescription_list.push(prescription_hash);   //adding prescriptoin hash generated in the array
        
        prescription memory _new_prescription= prescription(
            stringToBytes32(_current_doctor),
            stringToBytes32(_current_patient),
            _current_time,
            _details_of_prescription
            );
            
        patient_records[_patient_hash]._patient_prescription_record[prescription_hash]=_new_prescription;
        
        
        
    }
    
    function view_patient_details(address _patient_hash) public view only_doctor
    returns (
        address patient_hash,
        string memory patient_name,
        string memory patient_dob,
        string memory patient_previous_allergies,
        string memory patient_blood_group,
        string memory patient_contact_number,
        string memory patient_emergency_contact_number,
        uint patient_prescription_length
        
        ) {
            patient storage temp = patient_records[_patient_hash];
            
                 
                patient_hash=temp._patient_hash;
                patient_name=bytes32ToString(temp._patient_name);
                patient_dob=bytes32ToString(temp._patient_dob);
                patient_previous_allergies=bytes32ToString(temp._patient_previous_allergies);
                patient_blood_group=bytes32ToString(temp._patient_blood_group);
                patient_contact_number=bytes32ToString(temp._patient_contact_number);
                patient_emergency_contact_number=bytes32ToString(temp._patient_emergency_contact_number);
                patient_prescription_length=temp._patient_prescription_length;
                
                
        
    }
    
    
    function view_prescription_by_doctor(address _patient_hash,uint number) public view only_doctor
    returns(
    string memory doctor_prescribed ,
    string memory patient_prescribed,
    string memory description,
    uint256 time_prescribed
    ){
        uint _current_length_of_prescription = patient_records[_patient_hash]._patient_prescription_length;
        bytes32 _visible_prescription_hash;
        if(_current_length_of_prescription>=number)
            {
                _visible_prescription_hash = patient_records[_patient_hash]._prescription_list[_current_length_of_prescription-number];
                
            }
        
        
        description = (patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._description);
        doctor_prescribed = bytes32ToString(patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._doctor_name);
        patient_prescribed = bytes32ToString(patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._patient_name);
        time_prescribed = patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._timestamp;
        
        
        
    }
    
    function view_prescription_by_pharma (address _patient_hash,uint number) public view only_pharmacy
    returns(
    string memory doctor_prescribed ,
    string memory patient_prescribed,
    string memory description,
    uint256 time_prescribed
    ){
        uint _current_length_of_prescription = patient_records[_patient_hash]._patient_prescription_length;
        bytes32 _visible_prescription_hash;
        if(_current_length_of_prescription>=number)
            {
                _visible_prescription_hash = patient_records[_patient_hash]._prescription_list[_current_length_of_prescription-number];
                
            }
        
        
        
          description = (patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._description);
          doctor_prescribed = bytes32ToString(patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._doctor_name);
          patient_prescribed = bytes32ToString(patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._patient_name);
          time_prescribed = patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._timestamp;
        
        
        
    }

    function view_prescription_by_pathlab(address _patient_hash,uint number) public view only_pathology
    returns(
    string memory doctor_prescribed ,
    string memory patient_prescribed,
    string memory description,
    uint256 time_prescribed
    ){
        uint _current_length_of_prescription = patient_records[_patient_hash]._patient_prescription_length;
        bytes32 _visible_prescription_hash;
        if(_current_length_of_prescription>=number)
            {
                _visible_prescription_hash = patient_records[_patient_hash]._prescription_list[_current_length_of_prescription-number];
                
            }
        
        
        
          description = (patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._description);
          doctor_prescribed = bytes32ToString(patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._doctor_name);
          patient_prescribed = bytes32ToString(patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._patient_name);
          time_prescribed = patient_records[_patient_hash]._patient_prescription_record[_visible_prescription_hash]._timestamp;
        
        
        
    }
    
}