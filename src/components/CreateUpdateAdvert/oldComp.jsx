// class createUpdateAdvert extends React.Component {
//   constructor(props) {
//     super(props);
//     initialState.allTags = this.props.tags;
//     this.state = initialState;
//   }

//   handleChange = event => {
//     const { name, value } = event.target;

//     this.setState(prevState => ({
//       advert: {
//         ...prevState.advert,
//         [name]: value
//       }
//     }));
//   };

//   handleSubmit = async () => {
//     const { type, name, description, price, picture, tags } = this.state.advert;

//     if (!name || !price || !picture || !tags) {
//       this.setState(prevState => ({
//         ...prevState,
//         infoMessage: true
//       }));
//       return;
//     }

//     const ad = {
//       type,
//       name,
//       description,
//       price,
//       picture,
//       tags
//     };

//     if (this.comeFromUpdate()) {
//       const id = this.props.match.params.id;
//       await this.props.updateAdvert(ad, id);
//       if (this.props.advertUpdated.success) {
//         this.setState(prevState => ({
//           ...prevState,
//           success: true
//         }));
//       } else {
//         this.setState(prevState => ({
//           ...prevState,
//           error: true
//         }));
//       }
//     } else {
//       await this.props.createAdvert(ad);
//       if (this.props.advertCreated.success) {
//         this.setState(prevState => ({
//           ...prevState,
//           success: true
//         }));
//       } else {
//         this.setState(prevState => ({
//           ...prevState,
//           error: true
//         }));
//       }
//     }
//   };

//   render() {
//     const { type, name, description, price, picture, tags } = this.state.advert;
//     const { allTags } = this.state;

//     let title = (
//       <Typography variant="h6" gutterBottom>
//         {t('createAd')}
//       </Typography>
//     );

//     let buttonText = t('create');

//     if (this.comeFromUpdate()) {
//       title = (
//         <Typography variant="h6" gutterBottom>
//           Edita el anuncio seleccionado
//         </Typography>
//       );
//       buttonText = 'Actualizar';
//     }

//     // let statusMessage = '';

//     // if (this.state.success) {
//     //   statusMessage = (
//     //     <MySnackbarContentWrapper
//     //       onClose={this.handleClose}
//     //       variant="success"
//     //       className="margin"
//     //       message="¡Todo correcto!"
//     //     />
//     //   )
//     // } else if (this.state.infoMessage) {
//     //   statusMessage = (
//     //     <MySnackbarContentWrapper
//     //       onClose={this.handleClose}
//     //       variant="warning"
//     //       className="margin"
//     //       message="Debe rellenar los marcados con asterisco"
//     //     />
//     //   )
//     // } else if (this.state.error) {
//     //   statusMessage = (
//     //     <MySnackbarContentWrapper
//     //       onClose={this.handleClose}
//     //       variant="error"
//     //       className="margin"
//     //       message="Ha ocurrido un error, intentelo más tarde"
//     //     />
//     //   )
//     // }

//     return (
//       <>
//         <NavBar />
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <div className="paper">
//             {title}
//             <Grid container spacing={3}>
//               <Grid item xs={12} container justify="space-around">
//                 <FormGroup row>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         icon={<ShoppingBasketOutlinedIcon />}
//                         checkedIcon={<ShoppingBasketIcon />}
//                         value="buy"
//                         name="type"
//                         onChange={this.handleChange}
//                         checked={type === 'buy'}
//                       />
//                     }
//                     label="Comprar"
//                   />
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         icon={<AttachMoneyOutlinedIcon />}
//                         checkedIcon={<AttachMoneyOutlinedIcon />}
//                         value="sell"
//                         name="type"
//                         onChange={this.handleChange}
//                         checked={type === 'sell'}
//                       />
//                     }
//                     label="Vender"
//                   />
//                 </FormGroup>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="name"
//                   name="name"
//                   label="Nombre"
//                   fullWidth
//                   autoComplete="name"
//                   value={name}
//                   onChange={this.handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id="description"
//                   name="description"
//                   label="Descripción"
//                   fullWidth
//                   autoComplete="desc"
//                   value={description}
//                   onChange={this.handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth>
//                   <InputLabel required htmlFor="adornment-amount">
//                     Precio
//                   </InputLabel>
//                   <Input
//                     id="adornment-amount"
//                     value={price}
//                     name="price"
//                     onChange={this.handleChange}
//                     startAdornment={
//                       <InputAdornment position="start">€</InputAdornment>
//                     }
//                   />
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="picture"
//                   name="picture"
//                   label="Inserte la url de la imagen"
//                   fullWidth
//                   autoComplete="url picture"
//                   value={picture}
//                   onChange={this.handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth>
//                   <InputLabel required htmlFor="select-multiple-checkbox">
//                     Tags
//                   </InputLabel>
//                   <Select
//                     multiple
//                     value={tags}
//                     name="tags"
//                     onChange={this.handleChange}
//                     input={<Input id="select-multiple-checkbox" />}
//                     renderValue={selected => selected.join(', ')}
//                   >
//                     {allTags.map(tag => (
//                       <MenuItem key={tag} value={tag}>
//                         <Checkbox checked={tags.indexOf(tag) > -1} />
//                         <ListItemText primary={tag} />
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 {statusMessage}
//               </Grid>
//             </Grid>
//             <Grid item xs={12} container justify="space-around">
//               <Button
//                 id="submit-no-material"
//                 type="submit"
//                 className="submit"
//                 variant="contained"
//                 color="primary"
//                 onClick={this.handleSubmit}
//               >
//                 {buttonText}
//               </Button>
//               <Button
//                 variant="contained"
//                 id="submit-no-material"
//                 color="primary"
//                 onClick={this.resetForm}
//               >
//                 Restaurar
//               </Button>
//             </Grid>
//           </div>
//         </Container>
//       </>
//     );
//   }
// }

// export default createUpdateAdvert;

// return (
//     <>
//       <NavBar />
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className="paper">
//           <Avatar id="avatar-no-material" className="avatar">
//             <ArtTrackIcon />
//           </Avatar>
//           <Typography variant="h6" gutterBottom>
//             {comeFromUpdate() ? t('editAdvertHeader') : t('createAd')}
//           </Typography>
//           <Form
//             className="form"
//             noValidate
//             validate={({ name, price, picture, tags }) => {
//               if (!name || !price || !picture || !tags) {
//                 return t('fillAllFieldsMessage')
//               }
//             }}
//             initialValue={initialState}
//             onSubmit={handleSubmit}
//             onError={error =>
//               enqueueSnackbar(error, {
//                 variant: 'warning',
//                 anchorOrigin: {
//                   vertical: 'bottom',
//                   horizontal: 'center',
//                 },
//               })
//             }
//           >
//             <Grid container spacing={3}>
//               <Grid item xs={12} container justify="space-around">
//                 <FormGroup row>
//                   <Input
//                     control={
//                       <Checkbox
//                         icon={<ShoppingBasketOutlinedIcon />}
//                         checkedIcon={<ShoppingBasketIcon />}
//                         value="buy"
//                         checked={selectedAdvert.type === 'buy'}
//                       />
//                     }
//                     label={t('buy')}
//                     name="type"
//                     component={FormControlLabel}
//                   />
//                   <Input
//                     control={
//                       <Checkbox
//                         icon={<ShoppingBasketOutlinedIcon />}
//                         checkedIcon={<ShoppingBasketIcon />}
//                         value="sell"
//                         checked={selectedAdvert.type === 'sell'}
//                       />
//                     }
//                     label={t('sell')}
//                     name="type"
//                     component={FormControlLabel}
//                   />
//                 </FormGroup>
//               </Grid>
//             </Grid>
//             <Grid item xs={12}>
//               <Input
//                 name="name"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="name"
//                 label={t('labelName')}
//                 autoFocus
//                 value={selectedAdvert.name}
//                 component={TextField}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Input
//                 name="description"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 autoComplete="desc"
//                 id="description"
//                 label={t('description')}
//                 autoFocus
//                 value={selectedAdvert.description}
//                 component={TextField}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth>
//                 <InputLabel required htmlFor="adornment-amount">
//                   {t('price')}
//                 </InputLabel>
//                 <MaterialInput
//                   id="adornment-amount"
//                   value={selectedAdvert.price}
//                   name="price"
//                   onChange={handleChange}
//                   startAdornment={<InputAdornment position="start">€</InputAdornment>}
//                 />
//               </FormControl>
//             </Grid>

//             <Grid item xs={12}>
//               <Input
//                 name="picture"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="picture"
//                 autoComplete="url picture"
//                 label={t('pictureURL')}
//                 value={selectedAdvert.picture}
//                 autoFocus
//                 component={TextField}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth>
//                 <InputLabel required htmlFor="select-multiple-checkbox">
//                   {t('tags')}
//                 </InputLabel>
//                 <MaterialInput
//                   multiple
//                   value={selectedAdvert.tags}
//                   name="tags"
//                   input={<Input id="select-multiple-checkbox" />}
//                   renderValue={selected => selected.join(', ')}
//                 >
//                   {tags.map(tag => (
//                     <MenuItem key={tag} value={tag}>
//                       <Checkbox checked={tags.indexOf(tag) > -1} />
//                       <ListItemText primary={tag} />
//                     </MenuItem>
//                   ))}
//                 </MaterialInput>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} container justify="space-around">
//               <Button
//                 type="submit"
//                 className="submit"
//                 variant="contained"
//                 color="primary"
//                 disabled={ui.isFetching}
//               >
//                 {comeFromUpdate() ? t('updateButton') : t('create')}
//                 {ui.isFetching && <CircularProgress size={20} thickness={3.5} disableShrink />}
//               </Button>
//               <Button variant="contained" className="submit" color="primary" onClick={resetForm}>
//                 {t('reset')}
//               </Button>
//             </Grid>
//           </Form>
//         </div>
//       </Container>
//     </>
//   )
// }
