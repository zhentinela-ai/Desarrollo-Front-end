import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';

export default class Form extends Component {
  render() {
    return (
        <div class='border m-3 p-3'>
        <h2>{this.props.formName}</h2>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputName1">{this.props.input1}</label>
                    <div class='input-group'>
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user fa-fw"></i></span>
                        </div>
                        <input type="text" class="form-control" id="inputFirstName" placeholder={this.props.input1}/>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="lastName">{this.props.input2}</label>
                    <div class='input-group'>
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user fa-fw"></i></span>
                        </div>
                        <input type="text" class="form-control" id="inputLastName" placeholder={this.props.input2}/>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">{this.props.input3}</label>
                    <div class='input-group'>
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-envelope-o fa-fw"></i></span>
                        </div>
                        <input type="email" class="form-control" id="inputEmail4" placeholder={this.props.input3}/>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">{this.props.input4}</label>
                    <div class='input-group'>
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-key fa-fw"></i></span>
                        </div>
                        <input type="password" class="form-control" id="inputPassword4" placeholder={this.props.input4}/>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">{this.props.input5}</label>
                <div class='input-group'>
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-home fa-fw"></i></span>
                    </div>
                    <input type="text" class="form-control" id="inputAddress" placeholder={this.props.input5}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">{this.props.input6}</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">{this.props.input7}</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Estoy de acuerdo con el registro de mis datos personales
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">{this.props.buttonName}</button>
        </div>
    )
  }
}
