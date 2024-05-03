<Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="State" placeholder="State..." />
          )}
        />
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Locality" placeholder="Locality..." />
          )}
        />
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="DeviceId" placeholder="DeviceId's..." />
          )}
        />
        </Box>
        <Box sx={{mt:"20px", display:"flex", gap:"20px"}}>
            <ActionAreaCard/>
            <ActionAreaCard/>
            <ActionAreaCard/>
        </Box>
        <Box sx={{mt:"20px", display:"flex", gap:"20px"}}>
            <ActionAreaCard/>
            <ActionAreaCard/>
            <ActionAreaCard/>
        </Box>
        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid> */}
        <Box sx={{mt:"15px", display:"flex", justifyContent:"space-evenly", gap:"20px"}}>
          <Button size="300px " variant="contained" color="secondary">Vehicle</Button>
          <Button size="300px" variant="contained" color="secondary">Bms</Button>
          <Button size="300px" variant="contained" color="secondary">Vcu</Button>
        </Box>




{/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {props.children}
       
      </Box> */}